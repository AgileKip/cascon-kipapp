package com.cascon.config;

import java.util.ArrayList;
import javax.sql.DataSource;
import org.akip.camunda.form.AkipAttachmentsField;
import org.akip.camunda.form.AkipAttachmentsTaskInstanceField;
import org.akip.camunda.form.AkipNotesField;
import org.akip.camunda.form.AkipNotesTaskInstanceField;
import org.camunda.bpm.engine.*;
import org.camunda.bpm.engine.impl.form.type.AbstractFormFieldType;
import org.camunda.bpm.engine.spring.ProcessEngineFactoryBean;
import org.camunda.bpm.engine.spring.SpringProcessEngineConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
public class CamundaConfiguration {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private PlatformTransactionManager transactionManager;

    @Bean
    public SpringProcessEngineConfiguration processEngineConfiguration() {
        SpringProcessEngineConfiguration config = new SpringProcessEngineConfiguration();

        config.setDataSource(dataSource);
        config.setTransactionManager(transactionManager);
        config.setDatabaseSchemaUpdate("true");
        config.setHistory("full");
        config.setJobExecutorActivate(true);
        config.setJdbcBatchProcessing(false);

        if (config.getCustomFormTypes() == null) {
            config.setCustomFormTypes(new ArrayList<AbstractFormFieldType>());
        }

        config.getCustomFormTypes().add(new AkipAttachmentsField());
        config.getCustomFormTypes().add(new AkipNotesField());

        config.getCustomFormTypes().add(new AkipAttachmentsTaskInstanceField());
        config.getCustomFormTypes().add(new AkipNotesTaskInstanceField());

        return config;
    }

    @Bean
    public ProcessEngineFactoryBean processEngineFactory() {
        ProcessEngineFactoryBean factoryBean = new ProcessEngineFactoryBean();
        factoryBean.setProcessEngineConfiguration(processEngineConfiguration());
        return factoryBean;
    }

    @Bean
    public RepositoryService repositoryService(ProcessEngine processEngine) {
        return processEngine.getRepositoryService();
    }

    @Bean
    public RuntimeService runtimeService(ProcessEngine processEngine) {
        return processEngine.getRuntimeService();
    }

    @Bean
    public TaskService taskService(ProcessEngine processEngine) {
        return processEngine.getTaskService();
    }

    @Bean
    public CaseService caseService(ProcessEngine processEngine) {
        return processEngine.getCaseService();
    }

    @Bean
    public IdentityService identityService(ProcessEngine processEngine) {
        return processEngine.getIdentityService();
    }

    @Bean
    public HistoryService historyService(ProcessEngine processEngine) {
        return processEngine.getHistoryService();
    }
}
