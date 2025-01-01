import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ReusltModal = forwardRef(function ResultModal(
  { targetTime, timeRemaning, onRestart },
  ref
) {
  const userLost = timeRemaning <= 0;
  const formatedRemainingTime = (timeRemaning / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaning / (targetTime * 1000)) * 100);
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your score :{score}</h2>}
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
    </dialog>,
    document.getElementById('modal')
  );
});

export default ReusltModal;
