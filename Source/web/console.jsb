<solution name="Console" outputdirectory="">	
	<project name="console">
		<class name="sorento">
			<class name="console">				
				<class name="modal">
					<js file="javascript/modal/init.js" />
					<js file="javascript/modal/window.js" />
					<js file="javascript/modal/question.js" />
					<js file="javascript/modal/warning.js" />
					<js file="javascript/modal/error.js" />
					<js file="javascript/modal/chooser.js" />
					<js file="javascript/modal/usergroup_chooser.js" />
				</class>			
				<class name="snapIn">
					<js file="javascript/snapin.js" />
				</class>				
			</class>
			<class name="user">
				<js file="javascript/user.js" />
			</class>				
			<class name="usergroup">
				<js file="javascript/usergroup.js" />
			</class>				
			<class name="session">
				<js file="javascript/session.js" />
			</class>				
			<class name="media">
				<js file="javascript/media.js" />
			</class>				
			<class name="mediatransformation">
				<js file="javascript/mediatransformation.js" />
			</class>				
			<class name="services">
				<class name="config">
					<js file="javascript/services/config.js" />
				</class>
				<class name="snapshot">
					<js file="javascript/services/snapshot.js" />
				</class>
			</class>	
			<class name="helpers">
				<js file="javascript/helpers.js" />
			</class>									
		</class>
	</project>	
</solution>
