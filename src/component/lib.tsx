// 自定义组件 css - in - js
import React from 'react';
import styled from '@emotion/styled';
import { Spin, Typography } from 'antd';
import { DevTools, loadServer } from 'jira-dev-tool';
export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.between ? 'space-between' : undefined)};
  margin-bottom: ${props => props.marginBottom + 'rem'};

  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${props =>
      typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '2rem' : undefined};
  }
`;

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
  /* 使用固定定位让元素撑满全屏 */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FullPageLoading = () => (
  <FullPage>
    <Spin size={'large'} />
  </FullPage>
);

export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <FullPage>
    <DevTools />
    <Typography.Text type={'danger'}>{error?.message}</Typography.Text>
  </FullPage>
);