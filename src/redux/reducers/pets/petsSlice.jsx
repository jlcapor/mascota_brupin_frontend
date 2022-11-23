import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import petService from "../../../services/pet.service";

const petsAdapter = createEntityAdapter();
const initialState = petsAdapter.getInitialState({
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
});

export const fetchPets = createAsyncThunk("pets/fetchPets", async () => {
  const response = await petService.getAllPets();
  return response.data;
});

export const createNewPet = createAsyncThunk(
  "pets/createNewPet",
  async (initialPet) => {
    const response = await petService.createPet(initialPet);
    return response.data;
  }
);

export const updatePet = createAsyncThunk(
  "pets/updatePet",
  async (initialPet) => {
    const { id } = initialPet;

    try {
      const response = await petService.updatePet(id, initialPet);
      return response.data;
    } catch (error) {
      return initialPet; // only for testing Redux!
    }
  }
);

export const deletePet = createAsyncThunk("pets/deletePet", async (id) => {
  try {
    await petService.deletePet(id);
    return id;
  } catch (error) {
    console.log(error);
  }
});

export const findPetsById = createAsyncThunk(
  "pets/findPetsById",
  async (idUser) => {
    const { data } = await petService.findPetsById(idUser);
    return data;
  }
);

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    resetAll: (state) => {
      petsAdapter.removeAll(state);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPets.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        // Use the `upsertMany` reducer as a mutating update utility
        petsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchPets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createNewPet.fulfilled, (state, action) => {
        state.status = "idle";
        petsAdapter.addOne(state, action.payload);
      })

      .addCase(updatePet.pending, (state) => {
        state.status = "loading";
      })

      .addCase(updatePet.fulfilled, (state, action) => {
        state.status = "idle";
        petsAdapter.upsertOne(state, action.payload);
      })

      .addCase(deletePet.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deletePet.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action.payload)
        petsAdapter.removeOne(state, action.payload)
      })

      .addCase(findPetsById.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(findPetsById.fulfilled, (state, action) => {
        state.status = "succeeded";
        petsAdapter.setAll(state, action.payload);
      })
      .addCase(findPetsById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { resetAll } = petsSlice.actions;

export default petsSlice.reducer;

export const {
  selectAll: selectAllPets,
  selectById: selectPetById,
  selectIds: selectPetIds,
} = petsAdapter.getSelectors((state) => state.pets);

export const getPetsStatus = (state) => state.pets.status;
export const getPetsError = (state) => state.pets.error;

export const selectPetsByUser = createSelector(
  [selectAllPets, (state, userId) => userId],
  (pets, userId) => pets.filter((pet) => pet.usuarioId === userId)
);
