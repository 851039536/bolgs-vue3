

import {
  Button, Pagination, PageHeader, Select, Table, Layout, Menu, Form, Input, Spin,
  BackTop, Modal, message, Space, Breadcrumb, Popconfirm, Avatar, Skeleton
} from 'ant-design-vue';
const plugins = [Button, Pagination, PageHeader, Select, Table, Layout, Menu, Form, Input, Spin,
  BackTop, Modal, message, Space, Breadcrumb, Popconfirm, Avatar, Skeleton];

export const setupAntd = (app: any, options = {}) => {
  app.config.globalProperties.$mes = message;
  plugins.forEach((plugin) => {
    app.use(plugin);
  });
};


