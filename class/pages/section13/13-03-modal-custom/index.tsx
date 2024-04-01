import { Modal } from 'antd';
import { useState } from 'react';

export default function ModalCustomPage(): JSX.Element {
  const [isModalOpen, setModalOpen] = useState(false);

  const showModal = (): void => {
    setModalOpen(true);
  };

  const handleOk = (): void => {
    setModalOpen(false);
  };

  const handleCancel = (): void => {
    setModalOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>비밀번호 입력</button>
      <Modal
        title="비밀번호 입력"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 입력: <input type="password" />
      </Modal>
    </>
  );
}
