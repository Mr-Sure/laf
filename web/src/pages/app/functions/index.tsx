/****************************
 * cloud functions index page
 ***************************/

import Content from "@/components/Content";
import { Col, Row } from "@/components/Grid";

import BottomPanel from "./mods/BottomPanel";
import ConsolePanel from "./mods/ConsolePanel";
import DebugPanel from "./mods/DebugPanel";
import DependencePanel from "./mods/DependencePanel";
import EditorPanel from "./mods/EditorPanel";
import FunctionPanel from "./mods/FunctionPanel";

import useCustomSettingStore from "@/pages/customSetting";

function FunctionPage() {
  const functionPageConfig = useCustomSettingStore((store) => store.layoutInfo.functionPage);
  return (
    <Content>
      <Row className="overflow-hidden">
        <Col {...functionPageConfig.SiderBar}>
          <FunctionPanel />
          <Row {...functionPageConfig.DependencePanel}>
            <DependencePanel />
          </Row>
        </Col>
        <Col className="overflow-hidden">
          <Row>
            <EditorPanel />
          </Row>
          <Row {...functionPageConfig.ConsolePanel}>
            <ConsolePanel />
          </Row>
        </Col>
        <Col {...functionPageConfig.RightPanel}>
          <DebugPanel />
        </Col>
      </Row>
      <Row {...functionPageConfig.Bottom}>
        <BottomPanel />
      </Row>
    </Content>
  );
}

export default FunctionPage;
