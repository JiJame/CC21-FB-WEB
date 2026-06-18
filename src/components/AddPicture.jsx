import { PhotoIcon2 } from "../icons";

function AddPicture() {
  return (
    <div className="flex flex-col p-2 border rounded-lg">
      <div
        className="min-h-40 bg-slate-100 relative cursor-pointer hover:bg-slate-200"
        onClick={() => document.getElementById("input-file").click()}
      >
        <input type="file" id="input-file" className="hidden" />
        <PhotoIcon2 className="w-10 absolute top-10 right-1/2 translate-1/2 opacity-40" />
      </div>
    </div>
  );
}

export default AddPicture;
