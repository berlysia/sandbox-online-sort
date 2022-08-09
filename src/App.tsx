import { useRef, useState } from "react";
import { onlineSort } from "./onlineSort";

type State<T> = { left: T; right: T };

function App() {
  type T = number;
  const [state, setState] = useState<IteratorResult<State<T>> | null>(null);
  const genRef = useRef<Generator<
    { left: T; right: T },
    T[],
    -1 | 0 | 1
  > | null>(null);

  function handleStart() {
    genRef.current = onlineSort(
      Array.from({ length: 5 }, (_, i) => i + 1).sort(() => Math.random() - 0.5)
    );
    setState(genRef.current.next());
  }

  function handleLeftBigger() {
    setState(genRef.current!.next(-1));
  }

  function handleRightBigger() {
    setState(genRef.current!.next(1));
  }

  return (
    <div>
      <div>
        {state ? (
          state.done ? (
            `done!: ${state.value}`
          ) : (
            <div>
              <div>
                {state.value.left}, {state.value.right}
              </div>
              より先頭に来てほしい方を選ぶ
              <button type="button" onClick={handleLeftBigger}>
                left
              </button>
              <button type="button" onClick={handleRightBigger}>
                right
              </button>
            </div>
          )
        ) : (
          <button type="button" onClick={handleStart}>
            start
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
