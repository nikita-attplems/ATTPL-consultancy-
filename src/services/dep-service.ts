import { api } from "../lib/api";

export interface Department {
    id: string;
    organizationId: string;
    name: string;
    code: string;
    description: string;
    headUserId: string | null;
    status: string;
    createdAt: string;
    updatedAt: string;
    organization?: Record<string, unknown>;
}

export interface Service {
    id: string;
    departmentId: string;
    name: string;
    code: string;
    category: string;
    description: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    department?: Department;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
}

export async function getDepartments() {
    return api<ApiResponse<Department[]>>("/api/dep", {
        method: "GET",
    });
}

export async function getServicesByDepartment(
    departmentId: string
) {
    return api<ApiResponse<Service[]>>(
        `/api/ser/department/${departmentId}`,
        {
            method: "GET",
        }
    );
}
