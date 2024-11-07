<template>
  <div>
    <div v-if="$route.params.processDefinitionId">
      <process-definition-dashboard-config :processDefinitionId="$route.params.processDefinitionId" />
    </div>
  </div>
</template>
