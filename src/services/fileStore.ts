
import { FileMeta } from "../types/ecom";

 
const store: Record<string, File> = {};
 
export function setFile(key: string, file: File | null) {
    if (file) store[key] = file;
    else delete store[key];
}
 
export function getFile(key: string): File | undefined {
    return store[key];
}
 
export function getAllFiles(): File[] {
    return Object.values(store);
}
 
export function clearFiles() {
    Object.keys(store).forEach((k) => delete store[k]);
}
 
export async function getFileStrict(
    key: string,
    fallback?: FileMeta | null
): Promise<File | undefined> {
 
    const existing =
        store[key];
 
    if (existing) {
        return existing;
    }
 
    if (
        fallback?.url &&
        fallback.url.startsWith("blob:")
    ) {
        try {
            const response =
                await fetch(
                    fallback.url
                );
 
            const blob =
                await response.blob();
 
            const file =
                new File(
                    [blob],
                    fallback.name,
                    {
                        type:
                            fallback.type ||
                            blob.type,
                    }
                );
 
            store[key] = file;
 
            return file;
 
        } catch (error) {
            console.error(
                `Failed to recreate file for ${key}`,
                error
            );
        }
    }
 
    return undefined;
}
 
const filestore = { setFile, getFile, getAllFiles, clearFiles, getFileStrict };
 
export default filestore;
 
 