export default function nullToUndefined<T>(obj: T) {
    return obj === null ? undefined : obj;
}
