export interface UserInfo {
    user: {
        id: string;
        shortId: string;
        uniqueId: string;
        nickname: string;
        avatarLarger: string;
        avatarMedium: string;
        avatarThumb: string;
        signature: string;
        createTime: number;
        verified: boolean;
        secUid: string;
        ftc: boolean;
        relation: number;
        openFavorite: boolean;
        bioLink?: {
            link: string;
            risk: number;
        },
        commentSetting: number;
        commerceUserInfo: {
            commerceUser: boolean;
            downLoadLink?: any[];
            category?: string;
            categoryButton?: boolean;
        };
        duetSetting: number;
        stitchSetting: number;
        privateAccount: boolean;
        secret: boolean;
        isADVirtual: boolean;
        roomId: string;
        uniqueIdModifyTime: number;
        ttSeller: boolean;
        region: string;
        profileTab: {
            showMusicTab: boolean;
            showQuestionTab: boolean;
            showPlaylistTab: boolean;
        };
        fllowingVisability: number;
        recommendReason: string;
        nowInvitationCardUrl: string;
        nickNameModifyTime: number;
        isEmbedBanned: boolean;
        canExpPlaylist: boolean;
        profileEmbedPermission: number;
        language: string;
        eventList: any[];
    };
    stats: {
        followerCount: number;
        followingCount: number;
        heart: number;
        heartCount: number;
        videoCount: number;
        diggCount: number;
        friendCount: number;
    };
    itemList: any[];
}