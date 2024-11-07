import { Authority } from '@/shared/security/authority';
/* tslint:disable */
// prettier-ignore

// prettier-ignore
const ProcessDefinition = () => import('@/entities/process-definition/process-definition.vue');
// prettier-ignore
const ProcessDefinitionDashboard = () => import('@/entities/process-definition/process-definition-dashboard.vue');
// prettier-ignore
const ProcessDefinitionDashboardConfig = () => import('@/entities/process-definition/process-definition-dashboard-config.vue');
// prettier-ignore
const ProcessDefinitionDeploy = () => import('@/entities/process-definition/process-definition-deploy.vue');
// prettier-ignore
const ProcessDefinitionDeployments = () => import('@/entities/process-definition/process-definition-deployments.vue');
// prettier-ignore
const ProcessDefinitionDetails = () => import('@/entities/process-definition/process-definition-details.vue');
// prettier-ignore
const ProcessDefinitionInit = () => import('@/entities/process-definition/process-definition-init.vue');
// prettier-ignore
const ProcessDefinitionInstances = () => import('@/entities/process-definition/process-definition-instances.vue');
// prettier-ignore
const ProcessDeploymentDetails = () => import('@/entities/process-deployment/process-deployment-details.vue');
// prettier-ignore
const DecisionDefinition = () => import('@/entities/decision-definition/decision-definition.vue');
// prettier-ignore
const DecisionDefinitionDeploy = () => import('@/entities/decision-definition/decision-definition-deploy.vue');
// prettier-ignore
const DecisionDefinitionDeployments = () => import('@/entities/decision-definition/decision-definition-deployments.vue');
// prettier-ignore
const DecisionDefinitionDetails = () => import('@/entities/decision-definition/decision-definition-details.vue');
// prettier-ignore
const DecisionDeploymentDetails = () => import('@/entities/decision-deployment/decision-deployment-details.vue');
// prettier-ignore
const ProcessInstance = () => import('@/entities/process-instance/process-instance.vue');
// prettier-ignore
const ProcessInstanceDetails = () => import('@/entities/process-instance/process-instance-details.vue');
// prettier-ignore
const TaskInstance = () => import('@/entities/task-instance/task-instance.vue');
// prettier-ignore
const MyCandidateTaskInstance = () => import('@/entities/task-instance/my-candidate-task-instance.vue');
// prettier-ignore
const TaskInstanceDetails = () => import('@/entities/task-instance/task-instance-details.vue');
// prettier-ignore
const TaskInstanceExecute = () => import('@/entities/task-instance/task-instance-execute.vue');
// prettier-ignore
const TenantList = () => import('@/entities/tenant/tenant-list.vue');
// prettier-ignore
const TenantUpdate = () => import('@/entities/tenant/tenant-update.vue');
// prettier-ignore
const TenantDetails = () => import('@/entities/tenant/tenant-details.vue');
// prettier-ignore
const AkipEmailConnectorConfigList = () => import('@/entities/akip-email-connector-config/akip-email-connector-config-list.vue');
// prettier-ignore
const AkipEmailConnectorConfigUpdate = () => import('@/entities/akip-email-connector-config/akip-email-connector-config-update.vue');
// prettier-ignore
const AkipEmailConnectorConfigDetails = () => import('@/entities/akip-email-connector-config/akip-email-connector-config-details.vue');
// prettier-ignore
const ProcessTimelineDefinitionList = () => import('@/entities/process-timeline-definition/process-timeline-definition-list.vue');
// prettier-ignore
const ProcessTimelineDefinitionUpdate = () => import('@/entities/process-timeline-definition/process-timeline-definition-update.vue');
// prettier-ignore
const ProcessTimelineDefinitionDetails = () => import('@/entities/process-timeline-definition/process-timeline-definition-details.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

export default [
  {
    path: '/process-definitions',
    name: 'ProcessDefinition',
    component: ProcessDefinition,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-definition/:processDefinitionId/dashboard',
    name: 'ProcessDefinitionDashboard',
    component: ProcessDefinitionDashboard,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-definition/:processDefinitionId/dashboard/config',
    name: 'ProcessDefinitionDashboardConfig',
    component: ProcessDefinitionDashboardConfig,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-definition/deploy',
    name: 'ProcessDefinitionDeploy',
    component: ProcessDefinitionDeploy,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-definition/:processDefinitionId/deployments',
    name: 'ProcessDefinitionDeployments',
    component: ProcessDefinitionDeployments,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-definition/:processDefinitionId/view',
    name: 'ProcessDefinitionView',
    component: ProcessDefinitionDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-definition/:processDefinitionId/init',
    name: 'ProcessDefinitionInit',
    component: ProcessDefinitionInit,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-definition/:processDefinitionId/instances',
    name: 'ProcessDefinitionInstances',
    component: ProcessDefinitionInstances,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-deployment/:processDeploymentId/view',
    name: 'ProcessDeploymentView',
    component: ProcessDeploymentDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/decision-definitions',
    name: 'DecisionDefinition',
    component: DecisionDefinition,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/decision-definition/deploy',
    name: 'DecisionDefinitionDeploy',
    component: DecisionDefinitionDeploy,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/decision-definition/:DecisionDefinitionId/deployments',
    name: 'DecisionDefinitionDeployments',
    component: DecisionDefinitionDeployments,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/decision-definition/:DecisionDefinitionId/view',
    name: 'DecisionDefinitionView',
    component: DecisionDefinitionDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/decision-deployment/:decisionDeploymentId/view',
    name: 'DecisionDeploymentView',
    component: DecisionDeploymentDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-instances',
    name: 'ProcessInstance',
    component: ProcessInstance,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-definition/:processDefinitionId/instance/:processInstanceId/view',
    name: 'ProcessInstanceView',
    component: ProcessInstanceDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/task-instances',
    name: 'TaskInstance',
    component: TaskInstance,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/my-candidate-tasks',
    name: 'MyCandidateTaskInstance',
    component: MyCandidateTaskInstance,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-definition/:processDefinitionId/task/:taskDefinitionKey/:taskInstanceId/view',
    name: 'TaskInstanceView',
    component: TaskInstanceDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-definition/:processDefinitionId/task/:taskDefinitionKey/:taskInstanceId/execute',
    name: 'TaskInstanceExecute',
    component: TaskInstanceExecute,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/tenant',
    name: 'TenantList',
    component: TenantList,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/tenant/new',
    name: 'TenantCreate',
    component: TenantUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/tenant/edit/:tentantId',
    name: 'TenantEdit',
    component: TenantUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/tenant/view/:tentantId',
    name: 'TenantView',
    component: TenantDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/akip-email-connector-config',
    name: 'AkipEmailConnectorConfigList',
    component: AkipEmailConnectorConfigList,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/akip-email-connector-config/new',
    name: 'AkipEmailConnectorConfigCreate',
    component: AkipEmailConnectorConfigUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/akip-email-connector-config/edit/:akipEmailConnectorConfigId',
    name: 'AkipEmailConnectorConfigEdit',
    component: AkipEmailConnectorConfigUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/akip-email-connector-config/view/:akipEmailConnectorConfigId',
    name: 'AkipEmailConnectorConfigView',
    component: AkipEmailConnectorConfigDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-definition/:bpmnProcessDefinitionId/timeline',
    name: 'ProcessTimelineDefinition',
    component: ProcessTimelineDefinitionList,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-definition/:bpmnProcessDefinitionId/timeline/:processTimelineDefinitionId/view',
    name: 'ProcessTimelineDefinitionDetails',
    component: ProcessTimelineDefinitionDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-definition/:bpmnProcessDefinitionId/timeline/create',
    name: 'ProcessTimelineDefinitionCreate',
    component: ProcessTimelineDefinitionUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/process-definition/:bpmnProcessDefinitionId/timeline/:processTimelineDefinitionId/edit',
    name: 'ProcessTimelineDefinitionEdit',
    component: ProcessTimelineDefinitionUpdate,
    meta: { authorities: [Authority.USER] },
  },
  // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
];
