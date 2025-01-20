import { history } from '@umijs/max';
import { Button, ConfigProvider, Result } from 'antd';
import enUSIntl from 'antd/lib/locale/en_US';
import React from 'react';

const NoFoundPage: React.FC = (props) => {
  return (
    <ConfigProvider locale={enUSIntl}>
      <Result
        status="error"
        title="Page not found"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => history.back()}>
            Back Home
          </Button>
        }
      />
    </ConfigProvider>
  );
};

export default NoFoundPage;
