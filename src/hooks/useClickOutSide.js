function useClickOutside() {
  function clickOutside(ref, callback) {
    console.log(callback);
    function changeRef(ref, callback, e) {
      if (!ref.current.contains(e.target, callback)) {
        callback();
      }
    }
    if (ref.current) {
      console.log("ref ka");
      window.addEventListener("click", (e) => changeRef(ref, callback, e));
    }
  }
  return { clickOutside };
}

export { useClickOutside };
