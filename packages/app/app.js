import lz from 'lz-string';

function getState() {
    const [_, data] = document.URL.split("#0=");
    if (!data) {
        return {};
    }
    const x = lz.decompressFromEncodedURIComponent(data);
    return JSON.parse(x);
}
const state = getState()
const flems = Flems(document.body, state)
