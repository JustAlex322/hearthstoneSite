import { createAsyncThunk } from "@reduxjs/toolkit";
import cardAPI from "../../api/api";


export const getCard = createAsyncThunk(
    "main/getCard",
    async (name : string,thunkApi) => {
        try {
            const response = await cardAPI.getCardByNameOrId(name)
            return response.data
        }
        catch (err : any) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }    
)

// export const getAllCards = createAsyncThunk(
//     "main/getAllCards",
//     async (_,thunkApi) => {
//         try {
//             const response = await cardAPI.getAllCards();
//             const arr10Cards = [...response.data];
//             response.data.length = 10
//             return response.data
//         } catch (error) {
//             debugger
//             return thunkApi.rejectWithValue("Что то пошло не так ...")
//         }
//     }
// )

