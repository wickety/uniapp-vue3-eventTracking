/**
 * trackTap:事件名，可以改成你自己的
 */
const injectCode = `
	 index$[injectPlaceCode].$emit('trackTap',event);
`;

const VitePluginInjectAutoTrack = () => {
  return {
    name: "auto-track",
    renderChunk(code, chunk) {
      let tempCode = code;
      if (chunk.fileName === "common/vendor.js") {
        const regx = new RegExp(/patchMPEvent\(event\) {([\s\S]*)/);
        tempCode = code.replace(regx, `patchMPEvent(event){ ${injectCode} $1`);

        // uniapp生成环境编辑后 uni.$emit -> $1.$emit(),所以要把 $1进行替换
        tempCode = tempCode.replace(/\[injectPlaceCode\]/, "1");
      }

      return tempCode;
    },
  };
};

export default VitePluginInjectAutoTrack;
