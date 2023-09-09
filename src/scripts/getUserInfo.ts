import { UserInfo } from "../types/UserInfo";

/**
    @params username: string
    @returns user info
*/
export async function getUserInfo(username: string): Promise<UserInfo> {
    const res = await fetch(`https://www.tiktok.com/@${username}`);

    try {
        if (!res.ok) throw new Error(`Failed to fetch user info for ${username}`);
        const html = (await res.text())
            .split(/<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__" type="application\/json">/)[1]
            .split('</script>')[0];
        const json = JSON.parse(html)["__DEFAULT_SCOPE__"]["webapp.user-detail"].userInfo as UserInfo;
        return json;
    } catch (err) {
        throw new Error(`Failed to parse user info for ${username}`);
    }
}