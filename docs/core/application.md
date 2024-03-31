# Application Component

The MVC Application Component, `\Zemit\Mvc\Application`, plays a role in orchestrating the overall operation of your MVC
application. This component works by leveraging the `\Phalcon\Mvc\Application` from the Phalcon framework, thereby
inheriting all of Phalcon's native advantages and features.

### Integration with Phalcon

By utilizing the `\Phalcon\Mvc\Application`, Zemit ensures that the application has access to a robust and efficient
foundation for managing MVC operations. This integration brings several benefits:

- **Comprehensive MVC Support**: Phalcon's application component provides a full-stack framework, complete with all
  necessary services to support the MVC pattern effectively.
- **Optimized Performance**: As Phalcon is known for its performance efficiency, Zemit applications benefit from this
  optimized operation, ensuring fast response times and lower resource consumption.

### HMVC Enhancements in Zemit

A significant enhancement introduced by Zemit is the `request()` method, aimed at facilitating Hierarchical
Model-View-Controller (HMVC) architecture in applications:

- **HMVC-Friendly Requests**: The `request()` method allows for inter-module communication, making it simpler to perform
  requests across different modules and namespaces within the application.
- **Response Handling**: Instead of sending the response directly, Zemit's application component returns the response
  content or value, providing more control over how responses are processed and presented.
- **Dispatch State Preservation**: To ensure that the current dispatch state remains unaffected, Zemit creates a new
  dispatcher based on the current one for handling these internal requests. This approach maintains application
  stability while supporting complex HMVC interactions.

### Further Reading

To delve deeper into the capabilities and usage of the Phalcon MVC Application Component, visit:

- [Phalcon MVC Application API](https://docs.phalcon.io/latest/api/phalcon_mvc/#mvcapplication){:target="_blank"}
- [Phalcon Application Component Documentation](https://docs.phalcon.io/latest/application/){:target="_blank"}

With `\Zemit\Mvc\Application`, developers can build sophisticated and modular MVC applications that leverage both the
power of Phalcon and the additional HMVC functionalities provided by Zemit, leading to more flexible, maintainable, and
scalable web applications.
