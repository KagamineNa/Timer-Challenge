import { forwardRef, useRef, useImperativeHandle } from "react";
const ResultModal = forwardRef(function ResultModal(
  { timeRemaining, targetTime, onReset },
  ref
) {
  const dialog = useRef();
  const resultLose = timeRemaining <= 0;
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
  const formatTimeRemaining = (timeRemaining / 1000).toFixed(2);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      {resultLose ? <h2>You Lose</h2> : null}
      {!resultLose ? <h2>Your Score: {score}</h2> : null}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formatTimeRemaining} seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;
