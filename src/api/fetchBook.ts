export async function fetchBook(link: string) {
    try {
        const res = await fetch(link);

        if (res.status === 200) {
            const json = res.json();

            return json;
        } else {
            throw new Error('error');
        }
    } catch (e) {
        throw e;
    }
}
