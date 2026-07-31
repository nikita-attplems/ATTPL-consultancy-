export class ApiError extends Error {
    status: number;
    data: unknown;

    constructor(message: string, status: number, data?: unknown) {
        super(message);
        this.name = "ApiError";
        this.status = status;
        this.data = data;
    }
}

type RequestOptions = Omit<RequestInit, "body"> & {
    body?: unknown;
    token?: string;
    params?: Record<string, string | number | boolean | undefined>;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

function buildUrl(
    endpoint: string,
    params?: RequestOptions["params"]
) {
    const url = new URL(endpoint, API_URL);

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                url.searchParams.set(key, String(value));
            }
        });
    }

    return url.toString();
}

export async function api<T>(
    endpoint: string,
    options: RequestOptions = {}
): Promise<T> {
    const {
        body,
        token,
        headers,
        params,
        ...fetchOptions
    } = options;

    const isFormData = body instanceof FormData;

    const response = await fetch(buildUrl(endpoint, params), {
        ...fetchOptions,
        headers: {
            ...(isFormData
                ? {}
                : {
                    "Content-Type": "application/json",
                }),
            ...(token
                ? {
                    Authorization: `Bearer ${token}`,
                }
                : {}),
            ...headers,
        },
        body:
            body === undefined
                ? undefined
                : isFormData
                    ? body
                    : JSON.stringify(body),
    });
    console.log("Status:", response.status);

    const contentType =
        response.headers.get("content-type") ?? "";

    const data = contentType.includes("application/json")
        ? await response.json()
        : await response.text();

    if (!response.ok) {
        throw new ApiError(
            typeof data === "object" &&
                data &&
                "message" in data
                ? String(data.message)
                : "Request failed",
            response.status,
            data
        );
    }

    return data as T;
}
