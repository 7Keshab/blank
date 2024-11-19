import { Timestamp } from 'firebase/firestore';
interface Todo {
    id: string;
    bodyText: string;
    updatedAt: Timestamp;
}  
export type { Todo };
