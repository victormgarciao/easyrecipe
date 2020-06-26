import { useStateValue } from "../stateManagement/stateManagement";

export function useModalQueueState() {
    const [state] = useStateValue();
    const { modalQueue } = state;
    return modalQueue;
}
