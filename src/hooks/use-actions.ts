import { useDispatch } from 'react-redux'
import { Dispatch } from '../states/store'

export function useActions() {
  return useDispatch<Dispatch>()
}