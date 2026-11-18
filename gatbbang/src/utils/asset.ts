/* public 폴더 경로 앞에 배포 base(/bread/)를 붙여줌 */
export const asset = (path: string) =>
    import.meta.env.BASE_URL + path.replace(/^\//, "")
