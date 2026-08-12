import { api } from "../lib/api";

export interface CreateServiceFormPayload {
    departmentId: string;
    serviceId: string;
    name: string;
    email: string;
    phone: string;
    formData: Record<string, unknown>;
    documents?: Record<string, File>;
}

export async function createServiceForm(
    payload: CreateServiceFormPayload
) {
    const formData = new FormData();

    formData.append("departmentId", payload.departmentId);
    formData.append("serviceId", payload.serviceId);
    formData.append("name", payload.name);
    formData.append("email", payload.email);
    formData.append("phone", payload.phone);

    formData.append(
        "formData",
        JSON.stringify(payload.formData)
    );

    if (payload.documents) {
        Object.entries(payload.documents).forEach(([key, file]) => {
            formData.append("documents", file);
            formData.append("documentTypes[]", key);
        });
    }

    return api("/api/sfs", {
        method: "POST",
        body: formData,
    });
}
