package com.cascon.config;

import com.cascon.repository.UserRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.akip.resolver.AkipUserDTO;
import org.akip.resolver.UserResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AkipCoreCommunityConfiguration {

    @Autowired
    private UserRepository userRepository;

    @Bean("userResolver")
    UserResolver userResolver() {
        return new UserResolver() {
            @Override
            public AkipUserDTO getUser(String login) {
                return userRepository
                    .findOneByLogin(login)
                    .map(
                        user -> {
                            AkipUserDTO userDTO = new AkipUserDTO();
                            userDTO.setFirstName(user.getFirstName());
                            userDTO.setEmail(user.getEmail());
                            userDTO.setLangKey(user.getLangKey());
                            return userDTO;
                        }
                    )
                    .get();
            }

            @Override
            public List<AkipUserDTO> getUsersByAuthorities(List<String> list) {
                return userRepository
                    .findDistinctByAuthoritiesNameIn(list)
                    .stream()
                    .map(
                        user -> {
                            AkipUserDTO userDTO = new AkipUserDTO();
                            userDTO.setFirstName(user.getFirstName());
                            userDTO.setEmail(user.getEmail());
                            userDTO.setLangKey(user.getLangKey());
                            return userDTO;
                        }
                    )
                    .collect(Collectors.toList());
            }

            @Override
            public List<AkipUserDTO> getUsersByLogins(List<String> list) {
                return userRepository
                    .findAllByLoginIn(list)
                    .stream()
                    .map(
                        user -> {
                            AkipUserDTO userDTO = new AkipUserDTO();
                            userDTO.setFirstName(user.getFirstName());
                            userDTO.setEmail(user.getEmail());
                            userDTO.setLangKey(user.getLangKey());
                            return userDTO;
                        }
                    )
                    .collect(Collectors.toList());
            }
        };
    }
}
