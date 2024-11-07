<template>
  <div>
    <div v-if="$route.params.bpmnProcessDefinitionId">
      <process-timeline-definition-list :bpmnProcessDefinitionId="$route.params.bpmnProcessDefinitionId" />
    </div>
  </div>
</template>
