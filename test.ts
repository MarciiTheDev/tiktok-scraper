import { getUserInfo } from "./dist/";

function test() {
    getUserInfo('tiktok').then(console.log);
}
test();