<template>
  <div>
    <div v-if="$route.params.decisionDefinitionId">
      <decision-definition-details :decisionDefinitionId="$route.params.decisionDefinitionId" />
    </div>
  </div>
</template>
