// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.first_name = ko.observable("Dao");
    this.last_name = ko.observable("Pham Duy");
    this.full_name = ko.computed(function() {
        return this.first_name() + " " + this.last_name();    
    }, this);
    this.capitalizeLastName = function() {
        var current_first_name = this.first_name();        // Read the current value
        this.first_name(current_first_name.toUpperCase()); // Write back a modified value
        var current_last_name = this.last_name();
        this.last_name(current_last_name.toUpperCase());
    };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());