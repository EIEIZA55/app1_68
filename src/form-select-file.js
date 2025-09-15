import React from "react";

export default function FormSelectFile() {
  const inputFile = React.useRef();
  const selectMaxNumFiles = React.useRef();
  const selectMaxSize = React.useRef();

  let maxNumfiles = [1, 2, 3, 4, 5];
  let maxFileSize = [50, 100, 200, 500, 1000]; // KB

  const onClickButton = () => {
    let maxNum = parseInt(selectMaxNumFiles.current.value);
    let maxSize = parseInt(selectMaxSize.current.value);
    let files = inputFile.current.files;

    // ตรวจสอบจำนวนไฟล์
    if (files.length > maxNum) {
      alert(`จำนวนไฟล์เกิน ${maxNum} ไฟล์`);
      inputFile.current.value = ""; // ล้างไฟล์
      return;
    }

    // ตรวจสอบขนาดของแต่ละไฟล์
    for (let file of files) {
      if (file.size > maxSize * 1024) {
        alert(`ไฟล์ ${file.name} เกิน ${maxSize} KB`);
        inputFile.current.value = "";
        return;
      }
    }

    alert("อัปโหลดสำเร็จ");
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "400px" }}>
      <h4>อัปโหลดไฟล์</h4>

      <div className="form-group mb-3">
        <label>จำนวนไฟล์สูงสุด</label>
        <select className="form-select" ref={selectMaxNumFiles}>
          {maxNumfiles.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group mb-3">
        <label>ขนาดไฟล์สูงสุด (KB)</label>
        <select className="form-select" ref={selectMaxSize}>
          {maxFileSize.map((size) => (
            <option key={size} value={size}>
              {size} KB
            </option>
          ))}
        </select>
      </div>

      <div className="form-group mb-3">
        <label>เลือกไฟล์</label>
        <input type="file" className="form-control" ref={inputFile} multiple />
      </div>

      <div className="text-center">
        <button className="btn btn-primary" type="button" onClick={onClickButton}>
          อัปโหลด
        </button>
      </div>
    </div>
  );
}
