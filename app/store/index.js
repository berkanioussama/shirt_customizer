import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD45',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
});

export default state