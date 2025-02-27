import mongoose from 'mongoose';

export function isValidObjectId(id: string): boolean | null {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return null;
    }
    return true;
}