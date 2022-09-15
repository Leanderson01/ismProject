import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
};

export default function ModalReading({ isOpen, children, setIsOpen }: Props) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-30 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              onClick={() => {
                setIsOpen(false);
              }}
              className="fixed inset-0 transition-opacity"
            ></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div
              className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl lg:max-w-5xl sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="flex flex-col px-4 pt-5 pb-4 bg-gray-700 sm:p-6 sm:pb-4 gap-10">
                {/* parte ler */}
                <div className="sm:flex sm:items-start">
                  <div>
                    <div className="mb-4">{children || "Sem conteúdo :("}</div>
                  </div>
                </div>
                <div className="space-y-4 lg:grid justify-items-end">
                  <div className="grid grid-cols-1 lg:w-36 content-evenly">
                    <button
                      className="px-4 py-2 App-link border border-white rounded-md p-2 hover:bg-slate-600 delay-75 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
