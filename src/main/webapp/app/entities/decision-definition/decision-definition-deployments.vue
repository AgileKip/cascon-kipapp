<template>
  <div>
    <div v-if="$route.params.decisionDefinitionId">
      <decision-definition-deployments :decisionDefinitionId="$route.params.decisionDefinitionId" />
    </div>
  </div>
</template>
