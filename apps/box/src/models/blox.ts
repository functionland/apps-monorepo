export interface TBlox {
    peerId: string
    name: string
    freeSpace?: TBloxFreeSpace
    propertyInfo?: TBloxProperty
}
export interface TBloxFreeSpace {
    device_count: number
    size: number;
    avail: number;
    used: number;
    used_percentage: number;
}
export type TBloxConectionStatus = 'CONNECTED' | 'PENDING' | 'DISCONNECTED'
export type DockerContainerInfo = {
    image: string//"index.docker.io/functionland/go-fula:test38",
    version: string// "sha256:542af831d97a930ca8f1715e43f08e220617568e8aebdfd6c8c160d0c7072c27",
    id: string// "2d830bb444f6345d961fa91187b31faa2040e78780202029ce8ddfa32ba7c3fb",
    labels: Record<string, string>
    //   {
    //     "com.centurylinklabs.watchtower.enable":"true",
    //     "com.docker.compose.config-hash": "f120272ac01c3e73804f3022b4eace71fa0f4c0a582cbeee34b5e6c678f39987",
    //     "com.docker.compose.container-number": "1",
    //     "com.docker.compose.depends_on": "fxsupport:service_started",
    //     "com.docker.compose.image": "sha256:542af831d97a930ca8f1715e43f08e220617568e8aebdfd6c8c160d0c7072c27",
    //     "com.docker.compose.oneoff": "False",
    //     "com.docker.compose.project": "fula",
    //     "com.docker.compose.project.config_files": "/usr/bin/fula/docker-compose.yml",
    //     "com.docker.compose.project.environment_file": "/usr/bin/fula/docker.env",
    //     "com.docker.compose.project.working_dir": "/usr/bin/fula",
    //     "com.docker.compose.service": "go-fula",
    //     "com.docker.compose.version": "2.16.0"
    //   },
    created: string // "2023-05-07T23:45:24.673444134Z",
    repo_digests: string[]
    //   [
    //     "functionland/go-fula@sha256:a55270137505532d02e316cc26aee6271ae048370da13276224b4bff69108ef1"
    //   ]
}
export type TBloxProperty = {
    bloxFreeSpace: TBloxFreeSpace
    containerInfo_fula: DockerContainerInfo,
    containerInfo_fxsupport: DockerContainerInfo,
    containerInfo_node: DockerContainerInfo,
    hardwareID: string //"5141290d789694aafce3392b5c17558b289663fc80312b89e6a105c15313c644"
}