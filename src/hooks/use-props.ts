import { useSelector } from "react-redux"
import { RootState } from '../states/store'

export function useProps<TR = RootState>(selector: (state: RootState) => TR = itself, equalityFn?: ((left: TR, right: TR) => boolean) | undefined): TR {
  return useSelector<RootState, TR>(selector, equalityFn)
}

function itself<T>(it: T): T { return it }