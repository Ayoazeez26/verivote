import verify from "../assets/verified.svg";

function Modal() {
  return (
    <div className="absolute inset-0 flex justify-center bg-overlay pt-[180px]">
      <div className="h-fit w-[400px] rounded-[12px] bg-white p-6 text-center shadow-md">
        <img src={verify} className="mx-auto mb-5 h-12 w-12" alt="" />
        <p className="mb-8 text-base leading-6 text-[#101828]">
          Your proposal has been submitted, you will be notified of the status.
        </p>
        <button className="w-full rounded-[8px] bg-[#1D5BD6] py-[10px] text-base font-bold leading-6 text-white">
          Okay
        </button>
      </div>
    </div>
  );
}

export default Modal;
