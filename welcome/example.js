var viewModel = {
    first_name: ko.observable(),
    last_name: ko.observable(),
    full_name: function () {
        return viewModel.first_name() + " " + viewModel.last_name();
    },
    capitalizeLastName: function (event, target) {
        console.log(event);
        var current_first_name = viewModel.first_name();
        viewModel.first_name(current_first_name.toUpperCase());
        var current_last_name = viewModel.last_name();
        viewModel.last_name(current_last_name.toUpperCase());
    }
}
viewModel.first_name("1st name");
viewModel.last_name("last name");
ko.applyBindings(viewModel);