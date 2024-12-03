import React from 'react';
import { Dialog } from '@headlessui/react';
import { Button } from '@/components/ConfirmationDialog';

const ConfirmationDialog = ({ open, handleClose, handleConfirm, title, content }) => {
  return (
    <Dialog open={open} onClose={handleClose} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="bg-gray-800 rounded-lg max-w-sm mx-auto z-20 p-6">
          <Dialog.Title className="text-lg font-bold text-white mb-2">{title}</Dialog.Title>
          <Dialog.Description className="text-gray-400 mb-4">{content}</Dialog.Description>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="ghost" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="button" variant="danger" onClick={handleConfirm}>
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmationDialog;
