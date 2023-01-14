import { useState } from "react";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import SectionList from "@/components/SectionList";
export type TTabItem = {
  key: string;
  name: string;
  component: React.ReactElement;
};
const SettingModal = (props: {
  headerTitle: string;
  children: React.ReactElement;
  tabMatch: TTabItem[];
}) => {
  const { headerTitle, tabMatch, children } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [item, setItem] = useState<TTabItem>();

  return (
    <>
      {React.cloneElement(children, {
        onClick: () => {
          setItem(tabMatch[0]);
          onOpen();
        },
      })}

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{headerTitle || "设置"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={6}>
            <div className="flex">
              <SectionList style={{ width: "200px", marginRight: "15px" }}>
                {tabMatch.map((tab) => {
                  return (
                    <SectionList.Item
                      className="mt-2 rounded-md"
                      isActive={item?.key === tab.key}
                      key={tab.key}
                      onClick={() => {
                        setItem(tab);
                      }}
                    >
                      {tab.name}
                    </SectionList.Item>
                  );
                })}
              </SectionList>
              <div className="w-full">
                {React.cloneElement(item?.component || <></>, {
                  onClose,
                })}
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SettingModal;
