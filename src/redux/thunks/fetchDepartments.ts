// import { createAsyncThunk } from "@reduxjs/toolkit";

// import { getDepartments, getServicesByDepartment,Department,Service } from "@/services/dep-service";
// import { setDepartments,setServicesForDepartment,setSelectedDepartment } from "../slices/esccomSlice";

// export const fetchServicesByDepartment = createAsyncThunk(
//     "esccom/fetchServicesByDepartment",
//     async (departmentId: string, { dispatch, rejectWithValue }) => {
//         try {
//             const res = await getServicesByDepartment(departmentId);
//             const services = res.data as Service[];
//             dispatch(setServicesForDepartment({ departmentId, services }));

//             return services;
//         } catch (err) {
//             return rejectWithValue(err);
//         }
//     }
// );

// export const fetchDepartments = createAsyncThunk(
//   "esccom/fetchDepartments",
//   async (_arg, { dispatch, rejectWithValue }) => {
//     try {
//       const res = await getDepartments();

//       const departments = res.data as Department[];

//       console.log(
//         "ALL DEPARTMENTS FROM API:",
//         departments
//       );

//       dispatch(setDepartments(departments));

//       // ================= CONSULTANCY DEPARTMENT =================

//       const consultancyDepartment = departments.find(
//         (d) =>
//           d.code?.toUpperCase().includes("CONSULT") ||
//           d.name?.toUpperCase().includes("CONSULT")
//       );

//       console.log(
//         "CONSULTANCY DEPARTMENT FOUND:",
//         consultancyDepartment
//       );

//       if (consultancyDepartment) {
//         // Save selected department ID
//         dispatch(
//           setSelectedDepartment(
//             consultancyDepartment.id
//           )
//         );

//         // Fetch services for this department
//         dispatch(
//           fetchServicesByDepartment(
//             consultancyDepartment.id
//           )
//         );
//       } else {
//         console.error(
//           "❌ CONSULTANCY DEPARTMENT NOT FOUND"
//         );
//       }

//       return departments;
//     } catch (err) {
//       console.error(
//         "❌ FETCH DEPARTMENTS ERROR:",
//         err
//       );

//       return rejectWithValue(err);
//     }
//   }
// );

// export default fetchDepartments;

import { createAsyncThunk } from "@reduxjs/toolkit";

import { getDepartments,getServicesByDepartment,Department,Service } from "@/services/dep-service";
import { setDepartment,setServicesForDepartment,setSelectedDepartment, setDepartments } from "../slices/esccomSlice";

export const fetchServicesByDepartment = createAsyncThunk(
    "esccom/fetchServicesByDepartment",
    async (departmentId: string, { dispatch, rejectWithValue }) => {
        try {
            const res = await getServicesByDepartment(departmentId);
            const services = res.data as Service[];
            dispatch(setServicesForDepartment({ departmentId, services }));

            return services;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const fetchDepartments = createAsyncThunk(
    "esccom/fetchDepartments",
    async (_arg, { dispatch, rejectWithValue }) => {
        try {
            const res = await getDepartments();
            const departments = res.data as Department[];
            dispatch(setDepartments(departments));

            // Todo: REPLACE AGRI WITH LEGAL
            const agri = departments.find(
                (d) => d.code.includes("CONSULTANCY") || d.name.toUpperCase().includes("CONSULTANCY")
            );

            if (agri) {
                dispatch(setSelectedDepartment(agri.id));
                // fetch services for AGRI
                dispatch(fetchServicesByDepartment(agri.id));
            }

            return departments;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export default fetchDepartments;
