<template>
  <div>
    <div v-if="$route.params.decisionDeploymentId">
      <decision-deployment-details :decisionDeploymentId="$route.params.decisionDeploymentId" />
    </div>
  </div>
</template>
