import { forwardRef, useImperativeHandle, useRef } from "react";
const ReusltModal = forwardRef(function ResultModal(
  { targetTime, timeRemaning,onRestart },
  ref
) {
  const userLost = timeRemaning <= 0;
  const formatedRemainingTime = (timeRemaning / 1000).toFixed(2);
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>You Win</h2>}
      <p>
        The target time was : <strong>{targetTime}</strong> second
        {targetTime > 1 ? "s" : ""}
      </p>
      <p>
        You stopped the time with <strong>{formatedRemainingTime} left.</strong>
      </p>
      <form method="dialog" onSubmit={onRestart}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ReusltModal;
