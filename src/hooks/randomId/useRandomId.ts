import { useState } from 'react';
import { generateRandomId } from '@/utils';

export function useRandomId(length: number): string {
    const [id] = useState(() => generateRandomId(length));
    return id;
}
