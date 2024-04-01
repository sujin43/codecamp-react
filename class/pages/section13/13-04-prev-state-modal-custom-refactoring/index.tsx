import { Modal } from 'antd';
import { useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import type { Address } from 'react-daum-postcode';

export default function ModalCustomPage(): JSX.Element {
  const [isModalOpen, setModalOpen] = useState(false);

  const onToggleModal = (): void => {
    setModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>주소 입력</button>
      {/* 모달 종료 방식 - 1. 모달 숨기기(이력서 등..) */}
      {/* <Modal
        title="주소 입력"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 - 2. 모달 삭제(신용카드, 비밀번호 등 중요 정보 입력 시) */}
      {isModalOpen /* state 바뀔 때마다 리렌더링이 일어나기 때문에 모달이 다시 만들어지는 것 */ && (
        <Modal
          title="주소 입력"
          open={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
